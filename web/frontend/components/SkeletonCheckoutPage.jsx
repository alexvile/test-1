import {
  SkeletonPage,
  Layout,
  Card,
  SkeletonBodyText,
  TextContainer,
  SkeletonDisplayText,
} from "@shopify/polaris";

export function SkeletonCheckoutPage() {
  return (
    <SkeletonPage primaryAction fullWidth>
      <Layout>
        <Layout.Section secondary>
          <Card>
            <Card.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                {/* <SkeletonBodyText lines={2} /> */}
              </TextContainer>
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </Card>
          <Card sectioned>
            <SkeletonBodyText lines={10} />
          </Card>
          <Card sectioned>
            <TextContainer>
              <SkeletonBodyText lines={5} />
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}
