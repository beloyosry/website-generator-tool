import { useState } from "react";
import ProjectGenerator from "./ProjectGenerator";
import Form from "./Form";

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        teacherImage: "",
        heroBackgroundImage: "",
        teacherAboutImage: "",
        firstArticle: "",
        secondArticle: "",
        points: [],
        cards: [],
        firstCounter: "",
        secondCounter: "",
        teacherPlatformLink: "",
        socialLinks: [],
        address: "",
        phone: "",
        email: "",
        gender: "",
        language: "",
        primaryColor: "#000000",
        secondaryColor: "#000000",
        heroColor: "#000000",
        pageColor: "#000000",
        subscribeColor: "#000000",
    });

    return (
        <div className="w-full px-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mt-10 mb-6 text-center">
                Teachers Portfolio Websites Generator
            </h1>

            <Form formData={formData} setFormData={setFormData} />

            <ProjectGenerator formData={formData} />
        </div>
    );
};

export default App;
