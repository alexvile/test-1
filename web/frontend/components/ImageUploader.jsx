import { DropZone, Stack, Thumbnail, Button, Icon } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import { useAuthenticatedFetch } from "../hooks";
import { DeleteMajor } from "@shopify/polaris-icons";

export default function ImageUploader({
  setLoading,
  loading,
  setRecentlyUploadedId,
}) {
  const fetch = useAuthenticatedFetch();
  const [file, setFile] = useState();
  const [hover, setHover] = useState(false);

  const handleDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => setFile(acceptedFiles[0]),
    []
  );

  const fileUploader = async (src) => {
    console.log("uploading to your Shopify store...");

    const tmpFileAttributes = {
      alt: file.name.split(".")[0],
      contentType: "IMAGE",
      originalSource: src,
    };
    const res = await fetch("/api/img-upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tmpFileAttributes),
    });
    const json = await res.json();
    if (res.ok) {
      // console.log(json);
      const { files } = json.response.data.fileCreate;
      // console.log(files[0]);
      setLoading(false);
      // console.log("image was uploaded succesfull to your Shopify store!");
      setRecentlyUploadedId(files[0].id);
    } else {
      setLoading(false);
      // console.log("error", json);
      return alert("Didn't upload to Shopify storage");
    }
  };

  const imageTmpUpload = async (data) => {
    const { url, parameters } = data[0];
    // console.log("url", url);
    // console.log("parameters", parameters);

    const formData = new FormData();
    parameters.forEach(({ name, value }) => {
      formData.append(name, value);
    });
    formData.append("file", file);
    // console.log(formData.get("file"));

    // console.log("uploading to temporary storage...");
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const key = parameters.find((p) => p.name === "key");
      const tmpURL = `${url}${key.value}`;
      fileUploader(tmpURL);
    } else {
      setLoading(false);
      // console.log("error", json);
      return alert("Didn't upload to temporary cloud");
    }
  };

  const createUrl = async () => {
    setLoading(true);
    const fileAttributes = {
      name: file.name,
      type: file.type,
      size: file.size.toString(),
    };

    // console.log("creating url...");

    const res = await fetch("/api/staged-upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fileAttributes),
    });

    const json = await res.json();
    if (res.ok) {
      // console.log(json);
      // console.log(
      //   "Targets",
      //   json.response.data.stagedUploadsCreate.stagedTargets
      // );
      imageTmpUpload(json.response.data.stagedUploadsCreate.stagedTargets);
    } else {
      setLoading(false);
      // console.log("error", json);
      return alert("Didn't created url");
    }
  };

  const clearInput = () => {
    setFile(null);
  };
  useEffect(() => {
    if (file) {
      // console.log("file to upload", file);
      createUrl();
    }
  }, [file]);

  const fileUpload = !file && (
    <DropZone.FileUpload actionHint="Accepts .gif, .jpg, .webp and .png" />
  );
  const uploadedFile = file && (
    <div className="w-full h-full flex items-center justify-start gap-x-3 pl-4 ">
      <Thumbnail
        size="large"
        alt={file.name}
        source={window.URL.createObjectURL(file)}
      />
      <div>
        <p>{file.name}</p>
        <p>{file.size} bytes</p>
      </div>
    </div>
  );

  return (
    <Stack vertical>
      <div className="relative">
        <DropZone
          accept="image/jpeg, image/png, image/gif, image/webp"
          type="image"
          onDrop={handleDrop}
          allowMultiple={false}
        >
          {uploadedFile}
          {fileUpload}
        </DropZone>
        {file && !loading && (
          <span
            className="absolute right-[2px] bottom-[2px] cursor-pointer w-[44px] h-[44px] flex items-center justify-center hover:[&>svg]:f"
            onClick={clearInput}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <Icon
              source={DeleteMajor}
              color={`${hover ? "interactive" : "base"}`}
            />
          </span>
        )}
      </div>
    </Stack>
  );
}
