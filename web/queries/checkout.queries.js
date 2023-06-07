const GET_SHOP_INFO = `#graphql
  query getShopInfo {
    shop {
      name
      checkoutApiSupported
      plan {
        displayName
        partnerDevelopment
        shopifyPlus
      }
    }
  }
`;

const GET_CHECKOUT_LIST = `#graphql
  query getCheckoutList {
    checkoutProfiles(first: 250) {
      nodes {
        id
        name
      }
    }
  }
`;

const GET_CHECKOUT_SETTINGS = `#graphql
  query getCheckoutSettings($checkoutProfileId: ID!) {
    checkoutBranding(checkoutProfileId: $checkoutProfileId) {
      customizations {
        checkbox {
          cornerRadius
        }
        control {
          border
          color
          cornerRadius
          labelPosition
        }
        favicon {
          image {
            ...imageFields
          }
        }
        global {
          cornerRadius
          typography {
            kerning
            letterCase
          }
        }
        header {
          alignment
          banner {
            image {
              ...imageFields
            }
          }
          logo {
            image {
              ...imageFields
            }
            maxWidth
          }
          position
        }
        headingLevel1 {
          typography {
            ...typographyFields
          }
        }
        headingLevel2 {
          typography {
            ...typographyFields
          }
        }
        headingLevel3 {
          typography {
            ...typographyFields
          }
        }
        main {
          backgroundImage {
            image {
              ...imageFields
            }
          }
        }
        merchandiseThumbnail {
          border
          cornerRadius
        }
        orderSummary {
          backgroundImage {
            image {
              ...imageFields
            }
          }
        }
        primaryButton {
          ...buttonFields
        }
        secondaryButton {
          ...buttonFields
        }
        select {
          border
          typography {
            ...typographyFields
          }
        }
        textField {
          border
          typography {
            ...typographyFields
          }
        }
      }
      designSystem {
        colorPalette {
          canvas {
            ...colorFields
          }
          color1 {
            ...colorFields
          }
          color2 {
            ...colorFields
          }
          critical {
            ...colorFields
          }
          interactive {
            ...colorFields
          }
          primary {
            ...colorFields
          }
        }
        cornerRadius {
          base
          small
          large
        }
        typography {
          primary {
            ...fontGroupFields
          }
          secondary {
            ...fontGroupFields
          }
          size {
            base
            ratio
          }
        }
      }
    }
  }

  fragment typographyFields on CheckoutBrandingTypographyStyle {
    font
    kerning
    letterCase
    size
    weight
  }

  fragment imageFields on Image {
    altText
    url
    id
  }

  fragment buttonFields on CheckoutBrandingButton {
    background
    blockPadding
    border
    cornerRadius
    inlinePadding
    typography {
      ...typographyFields
    }
  }

  fragment colorFields on CheckoutBrandingColorGroup {
    accent
    background
    foreground
  }

  fragment fontGroupFields on CheckoutBrandingFontGroup {
    base {
      sources
      weight
    }
    bold {
    sources
    weight
  }
  name
  }
`;

const SET_CHECKOUT_SETTINGS = `#graphql
  mutation setCheckoutSettings(
    $checkoutBrandingInput: CheckoutBrandingInput!
    $checkoutProfileId: ID!
  ) {
    checkoutBrandingUpsert(
      checkoutBrandingInput: $checkoutBrandingInput
      checkoutProfileId: $checkoutProfileId
    ) {
      checkoutBranding {
        customizations {
          checkbox {
            cornerRadius
          }
          control {
            border
            color
            cornerRadius
            labelPosition
          }
          favicon {
            image {
              ...imageFields
            }
          }
          global {
            cornerRadius
            typography {
              kerning
              letterCase
            }
          }
          header {
            alignment
            banner {
              image {
                ...imageFields
              }
            }
            logo {
              image {
                ...imageFields
              }
              maxWidth
            }
            position
          }
          headingLevel1 {
            typography {
              ...typographyFields
            }
          }
          headingLevel2 {
            typography {
              ...typographyFields
            }
          }
          headingLevel3 {
            typography {
              ...typographyFields
            }
          }
          main {
            backgroundImage {
              image {
                ...imageFields
              }
            }
          }
          merchandiseThumbnail {
            border
            cornerRadius
          }
          orderSummary {
            backgroundImage {
              image {
                ...imageFields
              }
            }
          }
          primaryButton {
            ...buttonFields
          }
          secondaryButton {
            ...buttonFields
          }
          select {
            border
            typography {
              ...typographyFields
            }
          }
          textField {
            border
            typography {
              ...typographyFields
            }
          }
        }
        designSystem {
          colorPalette {
            canvas {
              ...colorFields
            }
            color1 {
              ...colorFields
            }
            color2 {
              ...colorFields
            }
            critical {
              ...colorFields
            }
            interactive {
              ...colorFields
            }
            primary {
              ...colorFields
            }
          }
          cornerRadius {
            base
            small
            large
          }
          typography {
            primary {
              ...fontGroupFields
            }
            secondary {
              ...fontGroupFields
            }
            size {
            base
            ratio
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}

  fragment typographyFields on CheckoutBrandingTypographyStyle {
    font
    kerning
    letterCase
    size
    weight
  }

  fragment colorFields on CheckoutBrandingColorGroup {
    accent
    background
    foreground
  }

  fragment imageFields on Image {
    altText
    url
    id
  }

  fragment fontGroupFields on CheckoutBrandingFontGroup {
    base {
      sources
      weight
    }
    bold {
      sources
      weight
    }
    name
  }

  fragment buttonFields on CheckoutBrandingButton {
    background
    blockPadding
    border
    cornerRadius
    inlinePadding
    typography {
      ...typographyFields
    }
  }
`;

const STAGED_UPLOADS_CREATE = `#graphql
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        resourceUrl
        url
        parameters {
          name
          value
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const FILE_CREATE = `#graphql
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        alt
        ... on GenericFile {
          id
          createdAt
          originalFileSize
          __typename
        }
        ... on MediaImage {
          id
          createdAt
          __typename
        }
        ... on Video {
          id
          createdAt
          __typename
        }
        __typename
      }
      userErrors {
        code
        field
        message
        __typename
      }
      __typename
    }
  }
`;

const GET_IMAGES = `#graphql
  query ($numImages: Int!, $cursor: String) {
    files(
      first: $numImages
      after: $cursor
      reverse: true
      query: "-used_in:product AND media_type:IMAGE"
    ) {
      edges {
        node {
          id
          ... on MediaImage {
            createdAt
            alt
            image {
              id
              url
              width
              height
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const GET_IMAGE_BY_ID = `#graphql
  query ($id: ID!) {
    node(id: $id) {
      id
      ... on MediaImage {
        createdAt
        alt
        image {
          id
          url
          width
          height
        }
      }
    }
  }
`;

export {
  GET_SHOP_INFO,
  GET_CHECKOUT_LIST,
  GET_CHECKOUT_SETTINGS,
  SET_CHECKOUT_SETTINGS,
  STAGED_UPLOADS_CREATE,
  FILE_CREATE,
  GET_IMAGES,
  GET_IMAGE_BY_ID,
};
