/* eslint-disable react/prop-types */
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {
    appFile,
    footer,
    indexCss,
    indexHtml,
    mainJs,
    navBar,
    packageJson,
    siteConfig,
    hero,
    aboutTeacher,
    teacherServices,
    testimonials,
    teacherLinks,
    contactUs,
    tailwindConfig,
    viteConfig,
    postcssConfig,
} from "./TemplateWebsite";

const ProjectGenerator = (props) => {
    const { formData } = props;

    const handleGenerateProject = () => {
        // Create a new JSZip instance
        const zip = new JSZip();
        // Generate basic React project files

        // Create directories
        const srcDir = zip.folder("src");
        const componentsDir = srcDir.folder("components");
        const publicDir = zip.folder("public");

        // Add files to srcDir
        srcDir.file("App.jsx", appFile);
        srcDir.file("index.css", indexCss);
        srcDir.file("main.jsx", mainJs);
        srcDir.file("siteConfig.jsx", siteConfig(formData));

        // Add files to componentsDir
        componentsDir.file("NavBar.jsx", navBar);
        componentsDir.file("Hero.jsx", hero);
        componentsDir.file("AboutTeacher.jsx", aboutTeacher);
        componentsDir.file("TeacherServices.jsx", teacherServices);
        componentsDir.file("Testimonials.jsx", testimonials);
        componentsDir.file("TeacherLinks.jsx", teacherLinks);
        componentsDir.file("ContactUs.jsx", contactUs);
        componentsDir.file("Footer.jsx", footer);

        // Add package.json to root directory
        zip.file("index.html", indexHtml(formData));
        zip.file("package.json", packageJson);
        zip.file("tailwind.config.js", tailwindConfig(formData));
        zip.file("postcss.config.js", postcssConfig);
        zip.file("vite.config.js", viteConfig);

        // Generate the zip file asynchronously
        zip.generateAsync({ type: "blob" }).then((blob) => {
            // Save the zip file
            saveAs(blob, "generated-react-project.zip");
        });
    };

    return (
        <div className="my-5">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleGenerateProject}>
                Generate React Project
            </button>
        </div>
    );
};

export default ProjectGenerator;
