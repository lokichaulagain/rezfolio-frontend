import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("./../components/EditorWithUseQuill"), {
  ssr: false, // This ensures the component is rendered only on the client-side
});

export default function Home() {
  return (
    <div>
      <DynamicEditor />
    </div>
  );
}
