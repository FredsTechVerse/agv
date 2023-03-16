import React from "react";
import { ImageWrapper, SubHeading, Heading } from "./index";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
// Images will be loading as links but for now we can use the means that are available to us.

const DescriptionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative gallery-background w-full h-screen flex flex-col justify-start items-center">
      <div className="relative w-full h-full py-4 px-4 overflow-auto backdrop-blur-lg bg-black bg-opacity-80">
        <Heading text="CMS " />
        <button
          onClick={() => {
            console.log("Button clicked successfully");
            navigate("/console");
          }}
          className="absolute top-3 right-3"
        >
          <MdCancel className="text-white text-3xl" />
        </button>
        <p className="introduction">
          CMS is a project that aims to create a self-driving remote-controlled
          car that can track objects and navigate around obstacles in real-time.
          The system uses a combination of hardware components, such as a
          Raspberry Pi 4 Model B and a Coral USB Accelerator, and software
          algorithms, including YOLOv5, Deep SORT, A*, SLAM, and reinforcement
          learning.
        </p>
        <SubHeading text="Objectives " />
        <p className="objectives">
          The objectives of the Autonomous RC Car System are as follows:
          <ul>
            <li>
              Develop a robust system for object tracking and path planning
              using a Raspberry Pi and a Coral USB Accelerator.
            </li>
            <li>
              Implement state-of-the-art software algorithms, including YOLOv5
              for object detection, Deep SORT for object tracking, A* and SLAM
              for path planning, and reinforcement learning for optimization.
            </li>
            <li>
              Integrate the software and hardware components to create a
              functioning autonomous RC car system.
            </li>
            <li>
              Test and validate the system in various real-world scenarios,
              including indoor and outdoor environments, and refine the system
              based on feedback and performance metrics.
            </li>
          </ul>
        </p>

        <div className="hardware">
          <SubHeading text="Hardware " />
          <p>
            The Autonomous RC Car System uses the following hardware components:
          </p>
          <ul>
            <li>Raspberry Pi 4 Model B</li>
            <li>Coral USB Accelerator</li>
            <li>Ultrasonic sensor</li>
            <li>Servo motor</li>
            <li>Infrared sensors</li>
            <li>Camera</li>
            <li>DC Motors</li>
            <p>
              The hardware components are assembled onto a PCB used as a shield
              connected to the Raspberry Pi, with a power bank for energy
              supply.
            </p>
          </ul>
        </div>
        <div className="software">
          <SubHeading text="Software " />
          <p>
            The system uses the Robot Operating System (ROS) as the underlying
            framework for the software development and is programmed using
            Python. The software incorporates the following algorithms:
            <ul>
              <li> YOLOv5 for object detection</li>
              <li>Deep SORT for object tracking</li>
              <li>A* and SLAM for path planning</li>
              <li>Reinforcement learning for optimization</li>
            </ul>
          </p>
        </div>
        <div className="integration">
          <SubHeading text="Integration " />
          <p>
            The software and hardware components are integrated using ROS nodes
            and topics, with the Coral USB Accelerator handling the object
            detection and tracking algorithms.
          </p>
        </div>
        <div className="testing">
          <SubHeading text="Testing " />
          <p>
            The system is tested in various scenarios to evaluate its
            performance, including indoor and outdoor environments with varying
            light conditions, different types of obstacles, and varying speeds
            of the target object.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
