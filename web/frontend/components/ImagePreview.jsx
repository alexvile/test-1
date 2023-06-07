import {
    Modal,
    Image,
    Button,
    Icon,
    Popover,
    ActionList,
  } from "@shopify/polaris";
  // import noImage from "../assets/noImage.jpeg";
  import { useState, useCallback, useEffect } from "react";
  import ImageUploader from "../components/ImageUploader";
  import { ExchangeMajor } from "@shopify/polaris-icons";
  import { DeleteMajor } from "@shopify/polaris-icons";
  import { ImageGallery } from "./ImageGallery";
  
  export const ImagePreview = ({
    url,
    title,
    selectedImg,
    onImgSelect,
    loading,
    setLoading,
    setUrl,
  }) => {
    const [openModal, setOpenModal] = useState(false);
    const [popoverActive, setPopoverActive] = useState(false);
    const [tempSelect, setTempSelect] = useState(selectedImg);
    const [tempUrl, setTempUrl] = useState(url);
    const [recentlyUploadedId, setRecentlyUploadedId] = useState();
  
    const togglePopoverActive = useCallback(
      () => setPopoverActive((popoverActive) => !popoverActive),
      []
    );
  
    const activator = (
      <Button onClick={togglePopoverActive} disclosure fullWidth>
        Change
      </Button>
    );
    const changeImage = (
      <span className="flex justify-between items-center gap-x-3">
        <Icon source={ExchangeMajor} color="base" />
        <span>Change image</span>
      </span>
    );
    const removeImage = (
      <span className="flex justify-between items-center gap-x-3">
        <Icon source={DeleteMajor} color="base" />
        <span>Remove image</span>
      </span>
    );
  
    const deleteImage = () => {
      togglePopoverActive();
      console.log("delete");
      onImgSelect("empty");
      setUrl(null);
    };
  
    const accept = () => {
      togglePopoverActive();
      onImgSelect(tempSelect);
      setOpenModal(!openModal);
      setUrl(tempUrl);
    };
  
    return (
      <>
        {title && <p className="mb-[8px]">{title}</p>}
  
        {url && (
          <div className="max-w-[253px] border rounded">
            <div className="p-[16px] aspect-[16/10] overflow-hidden flex justify-center items-center bg-[#f1f2f4]">
              <Image className="w-full h-full object-cover" source={url} />
            </div>
            <div className="p-[12px] mt-[2px] bg-[#f1f2f4]">
              <Popover
                active={popoverActive}
                activator={activator}
                autofocusTarget="first-node"
                onClose={togglePopoverActive}
              >
                <ActionList
                  actionRole="menuitem"
                  items={[
                    {
                      content: changeImage,
                      onAction: () => {
                        setOpenModal(!openModal);
                      },
                    },
                    {
                      content: removeImage,
                      onAction: deleteImage,
                    },
                  ]}
                />
              </Popover>
            </div>
          </div>
        )}
        {!url && (
          <div className="max-w-[253px] border rounded">
            <div className="p-[16px] aspect-[16/8] overflow-hidden flex justify-center items-center bg-[#f1f2f4]">
              <Button
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                Select image
              </Button>
            </div>
          </div>
        )}
  
        <Modal
          open={openModal}
          onClose={() => setOpenModal(!openModal)}
          title="Select image"
          primaryAction={{
            disabled: loading,
            loading: loading,
            content: "Done",
            onAction: accept,
          }}
          secondaryActions={[
            {
              disabled: loading,
              content: "Cancel",
              onAction: () => setOpenModal(!openModal),
            },
          ]}
        >
          <Modal.Section>
            {/* really selected:{selectedImg} */}
            <ImageUploader
              loading={loading}
              setLoading={setLoading}
              setRecentlyUploadedId={setRecentlyUploadedId}
            />
            <ImageGallery
              recentlyUploadedId={recentlyUploadedId}
              loading={loading}
              setLoading={setLoading}
              onImgSelect={setTempSelect}
              selectedImg={tempSelect}
              setUrl={setTempUrl}
              reallySelected={selectedImg}
            />
          </Modal.Section>
        </Modal>
      </>
    );
  };
  