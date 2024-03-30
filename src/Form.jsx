/* eslint-disable react/prop-types */
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Example(props) {
    const { formData, setFormData } = props;

    const [addPoints, setAddPoints] = useState(1);
    const [addCards, setAddCards] = useState(1);
    const [addSocials, setAddSocials] = useState(1);
    const handleChange = (e, fieldName) => {
        const { name, value, type } = e.target;

        // For radio inputs, use the 'name' attribute as the field name
        const field = type === "radio" ? name : fieldName;

        // For radio inputs, use the 'value' attribute as the field value
        const fieldValue = type === "radio" ? value : value;

        setFormData((prevData) => ({
            ...prevData,
            [field]: fieldValue,
        }));
    };

    const handlePointsChange = (e, index) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            points: prevData.points.map((point, i) =>
                i === index ? value : point
            ),
        }));
    };

    const handleCardsChange = (e, index, type) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            cards: prevData.cards.map((card, i) =>
                i === index ? { ...card, [type]: value } : card
            ),
        }));
    };

    const handleSocialLinksChange = (e, index, type) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            socialLinks: prevData.socialLinks.map((link, i) =>
                i === index ? { ...link, [type]: value } : link
            ),
        }));
    };

    const handleGeneratePoints = (event) => {
        event.preventDefault();
        setFormData((prevData) => ({
            ...prevData,
            points: [...prevData.points, ""],
        }));
        setAddPoints(addPoints + 1);
    };

    const handleGenerateCards = (event) => {
        event.preventDefault();
        setFormData((prevData) => ({
            ...prevData,
            cards: [
                ...prevData.cards,
                { image: "", title: "", lecture: "", href: "" },
            ],
        }));
        setAddCards(addCards + 1);
    };

    const handleGenerateSocials = (event) => {
        event.preventDefault();
        setFormData((prevData) => ({
            ...prevData,
            socialLinks: [
                ...prevData.socialLinks,
                { name: "", icon: "", link: "" },
            ],
        }));
        setAddSocials(addSocials + 1);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };
    return (
        <form className="mt-10" onSubmit={(e) => onSubmit(e)}>
            <div className="space-y-12">
                {/* Website Settings */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">
                        Website Settings
                    </h2>

                    <div className="space-y-10">
                        {/* Page Title */}
                        <fieldset>
                            <div className="mt-6 space-y-6">
                                <legend className="text-sm font-semibold leading-6 text-gray-900">
                                    Page Title
                                </legend>
                                <input
                                    type="text"
                                    placeholder="Page Title"
                                    value={formData.title}
                                    onChange={(e) => handleChange(e, "title")}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </fieldset>

                        {/* Gender */}
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">
                                Gender
                            </legend>
                            <div className="mt-6 space-y-6">
                                {/* male */}
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="male"
                                        name="gender"
                                        type="radio"
                                        value="male"
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Gender"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                        htmlFor="male"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Male
                                    </label>
                                </div>

                                {/* female */}
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="female"
                                        name="gender"
                                        type="radio"
                                        value="female"
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Gender"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                        htmlFor="female"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        {/* Language */}
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">
                                Language
                            </legend>
                            <div className="mt-6 space-y-6">
                                {/* arabic */}
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="arabic"
                                        name="language"
                                        type="radio"
                                        value="arabic"
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Language"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                        htmlFor="arabic"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Arabic
                                    </label>
                                </div>

                                {/* english */}
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="english"
                                        name="language"
                                        type="radio"
                                        value="english"
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Language"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                        htmlFor="english"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        English
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        {/* Colors */}
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">
                                Colors
                            </legend>

                            <div className="mt-6 space-y-6">
                                <div className="w-full flex justify-between items-center">
                                    <label htmlFor="primary">Primary</label>
                                    <input
                                        id="primary"
                                        type="color"
                                        value={formData.primaryColor}
                                        onChange={(e) =>
                                            handleChange(e, "primaryColor")
                                        }
                                        placeholder="Primary"
                                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                                        style={{
                                            backgroundColor:
                                                formData.primaryColor,
                                        }}
                                    />
                                    <label htmlFor="secondary">Secondary</label>
                                    <input
                                        id="secondary"
                                        type="color"
                                        value={formData.secondaryColor}
                                        onChange={(e) =>
                                            handleChange(e, "secondaryColor")
                                        }
                                        placeholder="Secondary"
                                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                                        style={{
                                            backgroundColor:
                                                formData.secondaryColor,
                                        }}
                                    />
                                    <label htmlFor="hero">Hero</label>
                                    <input
                                        id="hero"
                                        type="color"
                                        value={formData.heroColor}
                                        onChange={(e) =>
                                            handleChange(e, "heroColor")
                                        }
                                        placeholder="Hero"
                                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                                        style={{
                                            backgroundColor: formData.heroColor,
                                        }}
                                    />
                                    <label htmlFor="page">Page</label>
                                    <input
                                        id="page"
                                        type="color"
                                        value={formData.pageColor}
                                        onChange={(e) =>
                                            handleChange(e, "pageColor")
                                        }
                                        placeholder="Page"
                                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                                        style={{
                                            backgroundColor: formData.pageColor,
                                        }}
                                    />
                                    <label htmlFor="subscribe">Subscribe</label>
                                    <input
                                        id="subscribe"
                                        type="color"
                                        value={formData.subscribeColor}
                                        onChange={(e) =>
                                            handleChange(e, "subscribeColor")
                                        }
                                        placeholder="Subscribe"
                                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                                        style={{
                                            backgroundColor:
                                                formData.subscribeColor,
                                        }}
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className=" font-semibold leading-7 text-gray-900 text-xl">
                        Personal Information:
                    </h2>
                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                        {/* Teacher Name */}
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                Teacher Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            handleChange(e, "name")
                                        }
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Hero Teacher Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon
                                    className="h-12 w-12 text-gray-300"
                                    aria-hidden="true"
                                />
                                <input
                                    type="url"
                                    value={formData.teacherImage}
                                    onChange={(e) =>
                                        handleChange(e, "teacherImage")
                                    }
                                    placeholder="Teacher Image Hero"
                                    className="block  border border-gray-300 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Hero BG photo
                            </label>
                            <input
                                type="url"
                                placeholder="Hero Background Image"
                                value={formData.heroBackgroundImage}
                                onChange={(e) =>
                                    handleChange(e, "heroBackgroundImage")
                                }
                                className="block  border border-gray-300 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                        </div>

                        {/* Cover photo with upload button */}
                        {/* <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                    />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">
                        Content Data
                    </h2>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <div className="col-span-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    About Teacher Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon
                                        className="h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                    />
                                    <input
                                        type="url"
                                        placeholder="Teacher About Image"
                                        value={formData.teacherAboutImage}
                                        onChange={(e) =>
                                            handleChange(e, "teacherAboutImage")
                                        }
                                        className="block  border border-gray-300 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Articles */}
                        <div className="col-span-full">
                            <label
                                htmlFor="first-article"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                First Article
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="first-article"
                                    name="first-article"
                                    placeholder="First Article"
                                    value={formData.firstArticle}
                                    onChange={(e) =>
                                        handleChange(e, "firstArticle")
                                    }
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Second Article
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="second-article"
                                    name="second-article"
                                    placeholder="Second Article"
                                    value={formData.secondArticle}
                                    onChange={(e) =>
                                        handleChange(e, "secondArticle")
                                    }
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                />
                            </div>
                        </div>

                        {/* Points */}
                        <h3 className="col-span-full font-semibold">
                            Article Points
                        </h3>
                        {formData.points.map((point, index) => (
                            <div key={index} className="sm:col-span-3">
                                <label
                                    htmlFor={`point-${index}`}
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Point-{index + 1}
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        value={point}
                                        onChange={(e) =>
                                            handlePointsChange(e, index)
                                        }
                                        placeholder={`point ${index + 1}`}
                                        name={`point-${index}`}
                                        id={`point-${index}`}
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            className="col-span-full bg-black text-white border border-gray-300 text-sm p-2 "
                            onClick={handleGeneratePoints}>
                            Add Point
                        </button>

                        {/* Cards */}
                        <h3 className="col-span-full font-semibold mt-10">
                            Teacher Cards
                        </h3>
                        {formData.cards.map((card, index) => (
                            <div
                                key={index}
                                className="col-span-full w-full flex justify-start items-center">
                                <div
                                    key={`cardData-${index}`}
                                    className="w-full flex justify-start items-center gap-5">
                                    <label
                                        htmlFor={`card-image-${index}`}
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Card Image-{index + 1}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name={`card-image-${index}`}
                                            id={`card-image-${index}`}
                                            onChange={(e) =>
                                                handleCardsChange(
                                                    e,
                                                    index,
                                                    "image"
                                                )
                                            }
                                            value={card.image}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <label
                                        htmlFor={`card-title-${index}`}
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Card Title-{index + 1}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name={`card-title-${index}`}
                                            id={`card-title-${index}`}
                                            onChange={(e) =>
                                                handleCardsChange(
                                                    e,
                                                    index,
                                                    "title"
                                                )
                                            }
                                            value={card.title}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <label
                                        htmlFor={`card-lecture-${index}`}
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Card Lecture-{index + 1}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name={`card-lecture-${index}`}
                                            id={`card-lecture-${index}`}
                                            onChange={(e) =>
                                                handleCardsChange(
                                                    e,
                                                    index,
                                                    "lecture"
                                                )
                                            }
                                            value={card.lecture}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <label
                                        htmlFor={`card-link-${index}`}
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Card Link-{index + 1}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name={`card-link-${index}`}
                                            id={`card-link-${index}`}
                                            onChange={(e) =>
                                                handleCardsChange(
                                                    e,
                                                    index,
                                                    "link"
                                                )
                                            }
                                            value={card.link}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            className="col-span-full bg-black text-white border border-gray-300 text-sm p-2 "
                            onClick={handleGenerateCards}>
                            Add Card
                        </button>

                        {/* Counters */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="first-counter"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                First Counter
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-counter"
                                    name="first-counter"
                                    value={formData.firstCounter}
                                    onChange={(e) =>
                                        handleChange(e, "firstCounter")
                                    }
                                    type="number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="second-counter"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                First Counter
                            </label>
                            <div className="mt-2">
                                <input
                                    id="second-counter"
                                    name="second-counter"
                                    type="number"
                                    value={formData.secondCounter}
                                    onChange={(e) =>
                                        handleChange(e, "secondCounter")
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Subscribe Link */}

                        <div className="col-span-full">
                            <label
                                htmlFor="second-counter"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="subscribe-link"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Subscribe Link
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="subscribe-link"
                                            name="subscribe-link"
                                            type="url"
                                            value={formData.teacherPlatformLink}
                                            onChange={(e) =>
                                                handleChange(
                                                    e,
                                                    "teacherPlatformLink"
                                                )
                                            }
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/* Social Icons */}
                        {formData.socialLinks.map((link, index) => (
                            <div key={index} className="col-span-full">
                                <h2 className="my-5 font-semibold">
                                    Social Icons-{index + 1}
                                </h2>
                                <div className="w-full col-span-full flex justify-between items-center">
                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label
                                            htmlFor={`icon-name${index}`}
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name={`icon-name${index}`}
                                                id={`icon-name${index}`}
                                                value={link.name}
                                                onChange={(e) =>
                                                    handleSocialLinksChange(
                                                        e,
                                                        index,
                                                        "name"
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor={`icon-svg-${index}`}
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            Icon
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name={`icon-svg-${index}`}
                                                id={`icon-svg-${index}`}
                                                value={link.icon}
                                                onChange={(e) =>
                                                    handleSocialLinksChange(
                                                        e,
                                                        index,
                                                        "icon"
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor={`icon-link-${index}`}
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            Link
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name={`icon-link-${index}`}
                                                id={`icon-link-${index}`}
                                                value={link.link}
                                                onChange={(e) =>
                                                    handleSocialLinksChange(
                                                        e,
                                                        index,
                                                        "link"
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            className="col-span-full bg-black text-white border border-gray-300 text-sm p-2 "
                            onClick={handleGenerateSocials}>
                            Add Social
                        </button>

                        {/*    Teacher Contact */}
                        <div className=" col-span-full">
                            <h2 className="my-5 font-semibold">
                                Teacher Contact
                            </h2>
                            <div className="w-full flex justify-between items-center">
                                <div>
                                    <label
                                        htmlFor="contact-address"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Teacher Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="contact-address"
                                            id="contact-address"
                                            value={formData.address}
                                            onChange={(e) =>
                                                handleChange(e, "address")
                                            }
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-phone"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Teacher Phone
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="contact-phone"
                                            id="contact-phone"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                handleChange(e, "phone")
                                            }
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Teacher Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="contact-email"
                                            id="contact-email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                handleChange(e, "email")
                                            }
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Test
                </button>
            </div>
        </form>
    );
}
