"use client";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";
import parse from "html-react-parser";
import axios from "axios";
import { Button } from "@mantine/core";

// import "./styles.css";

const Editor = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} },
  });

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register("modules/blotFormatter", BlotFormatter);
  }

  const [content, setcontent] = useState<any>();
  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta: any, oldContents: any) => {
        console.log("Text change!");
        console.log(delta);
        setcontent(delta);

        let currrentContents = quill.getContents();
        setcontent(currrentContents);
        console.log(currrentContents.diff(oldContents));
      });
    }
  }, [quill, Quill]);
  console.log(content);

  const createResume = async () => {
    const res = await axios.post("http://localhost:4000/api/resumes", { content });
    console.log(res);
  };

  const [data, setdata] = useState<any>("");
  useEffect(() => {
    const createResume = async () => {
      const res = await axios.get("http://localhost:4000/api/resumes/9");
      console.log(res);
      setdata(res.data.content);
    };
    createResume();
  }, []);

  return (
    <section className=" py-20 lg:pt-24 text-gray-600 ">
      <div
        style={{ width: "100vw" }}
        className="max-w-screen-xl  mx-auto px-4   md:px-8">
        <div
          ref={quillRef}
          style={{ height: "60vh", width: "100%" }}
        />

        <div>
          {content &&
            content.map((op: any, index: any) => {
              if (op.insert && typeof op.insert === "string") {
                return <p key={index}>{op.insert}</p>;
              } else if (op.insert && typeof op.insert === "object") {
                if (op.insert.image) {
                  return (
                    <ImageComponent
                      key={index}
                      data={op.insert.image}
                    />
                  );
                } else if (op.insert.text) {
                  return <p key={index}>{op.insert.text}</p>;
                }
              }
              return null;
            })}
        </div>

        <div className="flex justify-end mt-5">
          <Button
            onClick={createResume}
            className=" bg-indigo-500 hover:bg-indigo-500  "
            radius="xl"
            size="md">
            Create Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Editor;

const ImageComponent = ({ data }: any) => {
  return (
    <img
      src={data}
      alt="Inserted image"
    />
  );
};
