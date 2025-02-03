import InfiniteScroll from "./InfiniteScroll";

export default function Scroll() {
  return (
    <main className="flex flex-col items-center justify-center bg-white p-10">
      <h1 className="text-3xl text-black mb-8">
      Technologies That Power Our Solution
      </h1>
      <InfiniteScroll
        items={[
          "HTML", 
          "CSS", 
          "JavaScript", 
          "Next.js", 
          "React", 
          "Tailwind", 
          ".NET", 
          "C#", 
          "Oracle", 
          "MSSQL", 
          "Server Virtualization", 
          "Server Administration & Management"
        ]}
        speed="fast"
        direction="left"
      />
    </main>
  );
}
