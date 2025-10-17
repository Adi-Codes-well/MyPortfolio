import React from "react";
import StickyScroll from "../ui/StickyScroll";
import BackgroundBeams from "../ui/BackgroundBeams";

 
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i.pinimg.com/1200x/6d/04/05/6d04053e33ed632fab07bd45592aa91c.jpg"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img src="https://i.pinimg.com/736x/86/6d/11/866d11a4d57b8fd326b3d43c9a798856.jpg" alt="" />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img src="https://i.pinimg.com/736x/a8/5c/eb/a85ceb8879da97661021285605b849c5.jpg" alt="" />
      </div>
    ),
  },
];
function Featured() {
  return (
    <>
    {/* <BackgroundBeams /> */}
    <div className="text-3xl flex justify-center font-bold">
          Featured Projects
        </div>
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
    </>
  );
}

export default Featured;