import React from "react";
import { basicsInfoConstants } from "../../constants/Basics";
import {
  IconBuildingBank,
  IconBrandFacebook,
  IconBrandTwitter,
  IconPhone,
  IconMail,
} from "@tabler/icons";
import { FooterContacts, FooterData } from "../../dummy_data/footerData";
// import { TextInput } from "@mantine/core";
// import NormalButton from "../NormalButton";
// import { useHttpServices } from "../../hooks/useHttpServices";

// footer componets

export default function Index({ data }) {
  // const httpService=
  //   useEffect(() => {
  //     (async function () {
  //       try {
  //         const { getData } = await useHttpServices();
  //       } catch (error) {
  //       } finally {
  //       }
  //     })();

  //     //   return () => {
  //     //     second
  //     //   }
  //   }, []);

  return (
    <>
      <div className="bg-white h-full w-full mt-10 p-4 shadow-lg">
        <div className="flex laptop:flex-row laptop:space-y-0 space-y-4   flex-col justify-evenly">
          {/* 1 column */}
          <div className="flex flex-col h-full basis-1/4">
            <h1 className="m-auto font-bold">{data?.appName}</h1>
          </div>
          {/* 2 column */}
          <div className="flex flex-col space-y-2 basis-1/4">
            <div className="text-2xl font-bold">Contact us</div>
            {/* Address */}
            <div className="flex text-sm space-x-2 items-center">
              <IconBuildingBank className="text-primary" />
              <span>{data?.contactInfo?.address}</span>
            </div>
            {/* Facebook */}
            {data?.contactInfo?.facebookLink && (
              <div className="flex text-sm space-x-2 items-center">
                <IconBrandFacebook className="text-primary" />
                <a href={data?.contactInfo?.facebookLink} target="_blank">
                  <span>{data?.contactInfo?.facebookLink}</span>
                </a>
              </div>
            )}

            {/* Twitter */}

            {data?.contactInfo?.twitterLink && (
              <div className="flex text-sm space-x-2 items-center">
                <IconBrandTwitter className="text-primary" />
                <a href={data?.contactInfo?.twitterLink} target="_blank">
                  <span>{data?.contactInfo?.twitterLink}</span>
                </a>
              </div>
            )}

            {/* Phone */}
            {data?.contactInfo?.phone && (
              <div className="flex text-sm space-x-2 items-center">
                <IconPhone className="text-primary" />
                <a href={data?.contactInfo?.phone} target="_blank">
                  <span>{data?.contactInfo?.phone}</span>
                </a>
              </div>
            )}

            {/* Email */}
            {/* <div className="flex text-sm space-x-2 items-center">
              <IconMail className="text-primary" />
              <span>{FooterContacts.email}</span>
            </div> */}
          </div>
          {/* 3 column */}
          <div className="flex flex-col space-y-2 basis-1/4">
            <div className="text-2xl font-bold">About theme</div>
            <div className="text-lg font-bold">Documentations</div>
            <a
              href="http://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline "
            >
              Framework
            </a>
            <a
              href="http://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline "
            >
              Css library
            </a>
            <a
              href="http://mantine.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline "
            >
              UI Library
            </a>
            <a
              href="http://nisalk.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline "
            >
              Developer
            </a>
          </div>
          {/* 4 column */}
          {/* <div className='flex flex-col  basis-1/4'> */}
          {/* <div className="text-2xl font-bold">Subscribe</div>
                        <div>Subscribe to our mail list</div> */}
          {/* <div> */}
          {/* <form action="flex" method="post">
                                <div className="flex space-x-2">
                                    <div>
                                        <TextInput
                                            required
                                            placeholder="Your email address"
                                            withAsterisk
                                        />
                                    </div>
                                    <div>
                                        <NormalButton type="submit">
                                            Submit
                                        </NormalButton>
                                    </div>
                                </div>
                            </form> */}
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="w-full text-center mt-4 text-sm">
          {FooterData.copyright}
        </div>
      </div>
    </>
  );
}
