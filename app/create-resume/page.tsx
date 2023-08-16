"use client";
import { useEffect, useState } from "react";
import { ActionIcon } from "@mantine/core";
import SaveIcon from "../components/icons/SaveIcon";
import EditIcon from "../components/icons/EditIcon";
import { resumeRepository } from "../repository";

type Inputs = {
  //Introduction
  section_1_heading: string;
  section_1_1_desc: string;

  //Experience
  section_2_heading: string;
  section_2_1_title: string;
  section_2_1_subTitle: string;
  section_2_1_desc: string;

  section_2_2_title: string;
  section_2_2_subTitle: string;
  section_2_2_desc: string;

  section_2_3_title: string;
  section_2_3_subTitle: string;
  section_2_3_desc: string;

  section_2_4_title: string;
  section_2_4_subTitle: string;
  section_2_4_desc: string;

  section_2_5_title: string;
  section_2_5_subTitle: string;
  section_2_5_desc: string;

  // Academic
  section_3_heading: string;
  section_3_1_title: string;
  section_3_1_subTitle: string;
  section_3_1_desc: string;

  section_3_2_title: string;
  section_3_2_subTitle: string;
  section_3_2_desc: string;

  section_3_3_title: string;
  section_3_3_subTitle: string;
  section_3_3_desc: string;
};

export default function Page() {
  const [resumeData, setResumeData] = useState<any>();
  const [inputData, setInputData] = useState<Inputs>({
    //Introduction
    section_1_heading: "",
    section_1_1_desc: "",

    //Experience
    section_2_heading: "",
    section_2_1_title: "",
    section_2_1_subTitle: "",
    section_2_1_desc: "",

    section_2_2_title: "",
    section_2_2_subTitle: "",
    section_2_2_desc: "",

    section_2_3_title: "",
    section_2_3_subTitle: "",
    section_2_3_desc: "",

    section_2_4_title: "",
    section_2_4_subTitle: "",
    section_2_4_desc: "",

    section_2_5_title: "",
    section_2_5_subTitle: "",
    section_2_5_desc: "",

    // Academic
    section_3_heading: "",
    section_3_1_title: "",
    section_3_1_subTitle: "",
    section_3_1_desc: "",

    section_3_2_title: "",
    section_3_2_subTitle: "",
    section_3_2_desc: "",

    section_3_3_title: "",
    section_3_3_subTitle: "",
    section_3_3_desc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await resumeRepository.get(35);
      if (res?.data) {
        setResumeData(res.data);
        setInputData(res.data);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    const res = await resumeRepository.update(35, inputData);
    if (res?.status === 200) {
      setResumeData(inputData);
    }
  };

  const handleInputChange = (field: keyof Inputs, value: string) => {
    setInputData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const [section1EditModeOpen, setSection1EditModeOpen] = useState<boolean>(false);
  const [section2EditModeOpen, setSection2EditModeOpen] = useState<boolean>(false);
  const [section3EditModeOpen, setSection3EditModeOpen] = useState<boolean>(false);

  return (
    <section className="flex justify-center  pt-24 pb-20">
      <div className="wrapper flex flex-col gap-8 w-6/12 ">
        <div className="Introduction______________________Section">
          <div className="flex items-center justify-between">
            <div
              className="global_input text-3xl text-gray-600 font-semibold "
              contentEditable={section1EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_1_heading", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_1_heading }}
            />

            {section1EditModeOpen ? (
              <ActionIcon
                onClick={() => {
                  handleSave();
                  setSection1EditModeOpen(!section1EditModeOpen);
                }}>
                <SaveIcon />
              </ActionIcon>
            ) : (
              <ActionIcon onClick={() => setSection1EditModeOpen(!section1EditModeOpen)}>
                <EditIcon />
              </ActionIcon>
            )}
          </div>

          <div
            className="global_input desc"
            contentEditable={section1EditModeOpen}
            onBlur={(e: any) => handleInputChange("section_1_1_desc", e.target.textContent)}
            dangerouslySetInnerHTML={{ __html: inputData.section_1_1_desc }}
          />
        </div>

        <div className="Experience______________________Section flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div
              className="global_input text-3xl text-gray-600 font-semibold  "
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_heading", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_heading }}
            />
            {section2EditModeOpen ? (
              <ActionIcon
                onClick={() => {
                  handleSave();
                  setSection2EditModeOpen(!section2EditModeOpen);
                }}>
                <SaveIcon />
              </ActionIcon>
            ) : (
              <ActionIcon onClick={() => setSection2EditModeOpen(!section2EditModeOpen)}>
                <EditIcon />
              </ActionIcon>
            )}
          </div>

          <div className="Academic___Item flex flex-col gap-1">
            <div
              className="global_input text-gray-600 opacity-95 font-semibold  "
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_1_title", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_1_title }}
            />

            <div
              className="global_input text-gray-500 text-sm font-semibold opacity-90 "
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_1_subTitle", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_1_subTitle }}
            />

            <div
              className="global_input  desc"
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_1_desc", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_1_desc }}
            />
          </div>

          <div className="Experience___Item flex flex-col gap-1">
            <div
              className="global_input text-gray-600 opacity-95 font-semibold   "
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_2_title", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_2_title }}
            />

            <div
              className="global_input text-gray-500 text-sm font-semibold opacity-90  "
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_2_subTitle", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_2_subTitle }}
            />

            <div
              className="global_input  desc"
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_2_desc", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_2_desc }}
            />
          </div>

          <div className="Experience___Item flex flex-col gap-1">
            <div
              className="global_input text-gray-600 opacity-95 font-semibold  "
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_3_title", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_3_title }}
            />

            <div
              className="global_input text-gray-500 text-sm font-semibold opacity-90  "
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_3_subTitle", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_3_subTitle }}
            />

            <div
              className="global_input  desc"
              contentEditable={section2EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_2_3_desc", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_2_3_desc }}
            />
          </div>
        </div>

        <div className="Academic______________________Section flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div
              className="global_input text-3xl text-gray-600 font-semibold  "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_heading", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_heading }}
            />
            {section3EditModeOpen ? (
              <ActionIcon
                onClick={() => {
                  handleSave();
                  setSection3EditModeOpen(!section3EditModeOpen);
                }}>
                <SaveIcon />
              </ActionIcon>
            ) : (
              <ActionIcon onClick={() => setSection3EditModeOpen(!section3EditModeOpen)}>
                <EditIcon />
              </ActionIcon>
            )}
          </div>

          <div className="Academic___Item flex flex-col gap-1">
            <div
              className="global_input text-gray-600 opacity-95 font-semibold  "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_1_title", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_1_title }}
            />

            <div
              className="global_input text-gray-500 text-sm font-semibold   "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_1_subTitle", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_1_subTitle }}
            />

            <div
              className="global_input text-gray-500 text-xs font-semibold opacity-95 "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_1_desc", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_1_desc }}
            />
          </div>

          <div className="Academic___Item flex flex-col gap-1">
            <div
              className="global_input text-gray-600 opacity-95 font-semibold  "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_2_title", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_2_title }}
            />

            <div
              className="global_input text-gray-500 text-sm font-semibold   "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_2_subTitle", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_2_subTitle }}
            />

            <div
              className="global_input text-gray-500 text-xs font-semibold opacity-95 "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_2_desc", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_2_desc }}
            />
          </div>

          <div className="Academic___Item flex flex-col gap-1">
            <div
              className="global_input text-gray-600 opacity-95 font-semibold  "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_3_title", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_3_title }}
            />

            <div
              className="global_input text-gray-500 text-sm font-semibold   "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_3_subTitle", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_3_subTitle }}
            />

            <div
              className="global_input text-gray-500 text-xs font-semibold opacity-95 "
              contentEditable={section3EditModeOpen}
              onBlur={(e: any) => handleInputChange("section_3_3_desc", e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: inputData.section_3_3_desc }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
