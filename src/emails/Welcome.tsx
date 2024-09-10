import ROUTE from "@/app/api/constants/routes";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  name?: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  const previewText = `Join on Bazaar`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${ROUTE}/Bazaar.svg`}
                width="40"
                height="37"
                alt="Bazaar"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-[#295147]">
              Welcome to <strong>Bazaar</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              We're excited to have you join our vibrant marketplace. Bazaar is
              designed to connect <span className="font-semibold">buyers</span>{" "}
              and <span className="font-semibold">sellers</span> in a dynamic
              online shopping experience.
            </Text>
            <Text className="mb-2 text-[14px] leading-[24px]">
              To get started with Bazaar, here are a few things you can do:
            </Text>
            <ul className="mb-5 mt-0 text-[13px] leading-[20px]">
              <li>Set up your seller profile or buyer preferences</li>
              <li>Browse our wide range of products</li>
              <li>List your first item for sale</li>
              <li>Make your first purchase</li>
            </ul>
            <Text className="mb-5 text-[14px] leading-[24px]">
              Our <span className="font-semibold">support team</span> is always
              available to assist you with any questions about buying or selling
              on <span className="font-semibold">Bazaar</span>.
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="rounded bg-[#295147] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline hover:bg-opacity-90"
                href={`http://example.com`}
              >
                Start Shopping
              </Button>
            </Section>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              © 2023 <span className="text-black">Bazaar</span>. All rights
              reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WelcomeEmail.PreviewProps = {
  name: "alanturing",
  invitedByUsername: "Alan",
  invitedByEmail: "alan.turing@example.com",
  teamName: "Enigma",
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "204.13.186.218",
  inviteFromLocation: "São Paulo, Brazil",
} as WelcomeEmailProps;

export default WelcomeEmail;
