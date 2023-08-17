"use client";
import { useEffect, useRef, useState } from "react";
import { Button, Notification } from "@mantine/core";
import { resumeRepository } from "../repository";
import Link from "next/link";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { ICreateResume } from "../types/resume";
import dummyData from "../data/dummyResumeData.json";

export default function Page() {
  const [resumeData, setResumeData] = useState<any>();
  const [inputData, setInputData] = useState<ICreateResume>({
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

  const handleStartEditing = async () => {
    setStarting(true);
    const res = await resumeRepository.create(dummyData);
    const id = localStorage.setItem("rezfolioResumeId", res?.data.id);
    setStarting(false);
    setEditModeActive(!editModeActive);
    contentEditableRef.current.focus();
  };

  const [rezfolioResumeId, setRezfolioResumeId] = useState<any>();
  const [starting, setStarting] = useState<boolean>(false);
  useEffect(() => {
    const id = localStorage.getItem("rezfolioResumeId");
    setRezfolioResumeId(id);
  }, [handleStartEditing]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (rezfolioResumeId !== undefined) {
      setIsLoading(true);

      const fetchData = async () => {
        try {
          const res = await resumeRepository.get(rezfolioResumeId);
          if (res?.data) {
            setResumeData(res.data);
            setInputData(res.data);
          }
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [rezfolioResumeId]);

  const [showToast, setShowToast] = useState<boolean>(false);
  const handleSave = async () => {
    setEditModeActive(false);
    setShowToast(true);
    const res = await resumeRepository.update(35, inputData);

    if (res?.status === 200) {
      setResumeData(inputData);
    }
    setTimeout(() => {
      setShowToast(false);
    }, 100);
  };

  const handleInputChange = (field: keyof ICreateResume, value: string) => {
    setInputData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const [editModeActive, setEditModeActive] = useState<boolean>(false);
  const handleEditMode = async () => {
    setEditModeActive(!editModeActive);
  };

  const contentEditableRef: any = useRef(null);
  useEffect(() => {
    if (editModeActive) {
      contentEditableRef.current.focus();
    }
  }, [editModeActive]);

  return (
    <section className="flex justify-center min-h-screen  pt-16 pb-20 px-3 lg:px-0 ">
      <Notification
        className={`fixed right-2 top-16 w-96 transition-opacity  ${showToast ? "opacity-100 " : "opacity-0 "}`}
        color="green"
        withCloseButton={false}
        title="Saved Successfully"
        onClick={() => setShowToast(false)}
      />

      <div className="wrapper lg:w-6/12   ">
        <div className="flex justify-end gap-2">
          {!rezfolioResumeId && (
            <button
              disabled={starting}
              onClick={handleStartEditing}
              className=" bg-primary-500 hover:bg-primary-500 text-white text-xs font-semibold rounded-sm px-3 py-2">
              {starting ? "Starting .." : "Start Editing"}
            </button>
          )}

          {rezfolioResumeId && (
            <Button
              onClick={handleEditMode}
              size="xs"
              disabled={editModeActive}
              className=" bg-primary-500 hover:bg-primary-500">
              Edit
            </Button>
          )}

          {rezfolioResumeId && (
            <Button
              disabled={!editModeActive}
              onClick={handleSave}
              size="xs"
              className=" bg-primary-500 hover:bg-primary-500">
              Save
            </Button>
          )}
        </div>

        {rezfolioResumeId && isLoading ? (
          <div className="flex flex-col gap-8">
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        ) : (
          <div className="flex flex-col gap-8 ">
            <div className="Introduction______________________Section">
              <div className="flex items-center justify-between">
                <div
                  ref={contentEditableRef}
                  className="global_input text-3xl text-gray-600 font-semibold "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_1_heading", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_1_heading || dummyData.section_1_heading }}
                />
              </div>

              <div
                className="global_input desc"
                contentEditable={editModeActive}
                onBlur={(e: any) => handleInputChange("section_1_1_desc", e.target.textContent)}
                dangerouslySetInnerHTML={{ __html: inputData.section_1_1_desc || dummyData.section_1_1_desc }}
              />
            </div>

            <div className="Experience______________________Section flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div
                  className="global_input text-3xl text-gray-600 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_heading", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_heading || dummyData.section_2_heading }}
                />
              </div>

              <div className="Academic___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_1_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_1_title || dummyData.section_2_1_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold opacity-90 "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_1_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_1_subTitle || dummyData.section_2_1_subTitle }}
                />

                <div
                  className="global_input  desc"
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_1_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_1_desc || dummyData.section_2_1_desc }}
                />
              </div>

              <div className="Experience___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold   "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_2_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_2_title || dummyData.section_2_2_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold opacity-90  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_2_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_2_subTitle || dummyData.section_2_2_subTitle }}
                />

                <div
                  className="global_input  desc"
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_2_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_2_desc || dummyData.section_2_2_desc }}
                />
              </div>

              <div className="Experience___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_3_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_3_title || dummyData.section_2_3_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold opacity-90  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_3_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_3_subTitle || dummyData.section_2_3_subTitle }}
                />

                <div
                  className="global_input  desc"
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_3_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_3_desc || dummyData.section_2_3_desc }}
                />
              </div>
            </div>

            <div className="Academic______________________Section flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div
                  className="global_input text-3xl text-gray-600 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_heading", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_heading || dummyData.section_3_heading }}
                />
              </div>

              <div className="Academic___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_1_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_1_title || dummyData.section_3_1_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold   "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_1_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_1_subTitle || dummyData.section_3_1_subTitle }}
                />

                <div
                  className="global_input text-gray-500 text-xs font-semibold opacity-95 "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_1_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_1_desc || dummyData.section_3_1_desc }}
                />
              </div>

              <div className="Academic___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_2_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_2_title || dummyData.section_3_2_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold   "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_2_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_2_subTitle || dummyData.section_3_2_subTitle }}
                />

                <div
                  className="global_input text-gray-500 text-xs font-semibold opacity-95 "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_2_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_2_desc || dummyData.section_3_2_desc }}
                />
              </div>

              <div className="Academic___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_3_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_3_title || dummyData.section_3_3_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold   "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_3_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_3_subTitle || dummyData.section_3_3_subTitle }}
                />

                <div
                  className="global_input text-gray-500 text-xs font-semibold opacity-95 "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_3_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_3_desc || dummyData.section_3_3_desc }}
                />
              </div>
            </div>

            <div className="Deploy_____________________Section flex justify-end">
              <Link href={"/deploy-instruction"}>
                <Button className=" bg-primary-500 hover:bg-primary-500">Deploy</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
