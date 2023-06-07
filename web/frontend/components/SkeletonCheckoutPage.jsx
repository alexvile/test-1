import {
  SkeletonPage,
  Layout,
  LegacyCard,
  SkeletonBodyText,
  TextContainer,
  SkeletonDisplayText,
} from "@shopify/polaris";

export function SkeletonCheckoutPage() {
  return (
    <SkeletonPage primaryAction fullWidth>
      <Layout>
        <Layout.Section secondary>
          <LegacyCard>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                {/* <SkeletonBodyText lines={2} /> */}
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
          <LegacyCard sectioned>
            <SkeletonBodyText lines={10} />
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonBodyText lines={5} />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}
