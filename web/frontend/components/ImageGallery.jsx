import { useAuthenticatedFetch } from "../hooks";
import { Button, Image, Icon } from "@shopify/polaris";
import { useState, useEffect } from "react";
import { TickMinor } from "@shopify/polaris-icons";

export const ImageGallery = ({
  selectedImg,
  onImgSelect,
  loading,
  setLoading,
  reallySelected,
  setUrl,
  recentlyUploadedId,
}) => {
  const [images, setImages] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isMoreImages, setIsMoreImages] = useState(true);

  const fetch = useAuthenticatedFetch();

  function getPreviewUrl(imageUrl) {
    const url = new URL(imageUrl);
    url.searchParams.append("width", 100);
    return url.toString();
  }

  const getStoreImages = async () => {
    console.log("getting store images...");
    setLoading(true);
    const res = await fetch(`/api/images?&cursor=${cursor}`);
    const json = await res.json();
    if (res.ok) {
      const { files } = json.resp.data;
      // console.log(files);

      if (files.pageInfo.hasNextPage) {
        // console.log("has next page");
        setCursor(files.pageInfo.endCursor);
      } else {
        // console.log("No images left");
        setIsMoreImages(false);
      }
      // check if '.SVG'
      const imageObjects = [];
      files.edges.forEach(({ node }) => {
        if (!node.image.url.includes(".svg")) {
          node.image.previewUrl = getPreviewUrl(node.image.url);
          imageObjects.push(node);
        }
      });

      if (!cursor) {
        setImages(imageObjects);
      } else {
        setImages((prevState) => [...prevState, ...imageObjects]);
      }

      setLoading(false);
    } else {
      console.log("error", json);
      setLoading(false);
    }
  };

  const getImageById = async (imageGid) => {
    // console.log(imageGid);
    const id = imageGid.split("/MediaImage/")[1];
    // console.log(id);
    console.log("getting image by id...");

    setLoading(true);
    const res = await fetch(`/api/image/${id}`);
    const json = await res.json();

    // console.log("json get image by ID", json);

    if (res.ok) {
      const { node } = json.data;

      const imageUrl = node.image?.url;
      if (!imageUrl) {
        return getImageById(imageGid);
      }

      node.image.previewUrl = getPreviewUrl(imageUrl);
      // console.log(node);
      setImages((prevState) => [node, ...prevState]);

      onImgSelect(node.id);
      setUrl(node.image.url);

      setLoading(false);
    } else {
      console.log("error", json);
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("image gallery mounted");
    setImages([]);
    getStoreImages();
    onImgSelect(reallySelected);
  }, []);

  useEffect(() => {
    if (recentlyUploadedId) {
      getImageById(recentlyUploadedId);
      // console.log("recentlyUploadedID");
    }
  }, [recentlyUploadedId]);

  return (
    <div>
      <div className="mt-[16px]"></div>
      {images.length > 0 && (
        <ul className="flex flex-wrap gap-4">
          {images.map(({ id, alt, image }) => {
            return (
              <li
                onClick={() => {
                  onImgSelect(id);
                  setUrl(image.url);
                }}
                key={id}
                className="w-1/6 relative overflow-hidden flex justify-center items-center bg-[#f1f2f4] aspect-square rounded"
              >
                <span className="absolute top-[4px] left-[4px]">
                  <span className="w-[18px] h-[18px] block relative">
                    <span
                      className={`Polaris-Checkbox__Backdrop ${
                        selectedImg === id || selectedImg === image.id
                          ? "!bg-[var(--p-interactive)] !border-[var(--p-interactive)]"
                          : ""
                      } `}
                    ></span>
                    {(selectedImg === id || selectedImg === image.id) && (
                      <span className="absolute top-0 left-0 w-[18px] h-[18px] [&_svg]:!fill-[#fff]">
                        <Icon source={TickMinor} color="base" />
                      </span>
                    )}
                  </span>
                </span>
                <Image
                  alt={alt}
                  //   width={image.width}
                  //   height={image.height}
                  width={100}
                  src={image.previewUrl || image.url}
                  className="object-contain w-full h-full"
                />
              </li>
            );
          })}
        </ul>
      )}
      {isMoreImages && !loading && (
        <div className="text-center pt-[16px]">
          <Button onClick={getStoreImages}>Load more</Button>
        </div>
      )}
    </div>
  );
};
