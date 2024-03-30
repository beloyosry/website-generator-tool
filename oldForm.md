        {/* Form */}
        <form
        className="w-1/2 flex flex-col justify-center items-center"
        onSubmit={(e) => onSubmit(e)}>
        {/* Name */}
        <h2 className="text-xl font-bold my-4">Name</h2>
        <div className="w-full flex justify-center items-center gap-10">
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
        </div>

        {/* Hero Section */}
        <h2 className="text-xl font-bold my-4">Hero Section</h2>
        <div className="w-full flex justify-center items-center gap-10">
            <input
                type="text"
                value={formData.teacherImage}
                onChange={(e) => handleChange(e, "teacherImage")}
                placeholder="Teacher Image Hero"
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <input
                type="text"
                placeholder="Hero Background Image"
                value={formData.heroBackgroundImage}
                onChange={(e) => handleChange(e, "heroBackgroundImage")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
        </div>

        {/* About Section */}
        <h2 className="text-xl font-bold my-4">About Section</h2>
        <div className="w-full flex flex-col justify-center items-center">
            <input
                type="text"
                placeholder="Teacher About Image"
                value={formData.teacherAboutImage}
                onChange={(e) => handleChange(e, "teacherAboutImage")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />

            {/* Articles */}
            <h2 className="text-xl font-bold my-4">Articles</h2>
            <div className="w-full flex justify-center items-center gap-10">
                <textarea
                    type="text"
                    placeholder="First Article"
                    value={formData.firstArticle}
                    onChange={(e) => handleChange(e, "firstArticle")}
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                />
                <textarea
                    type="text"
                    placeholder="Second Article"
                    value={formData.secondArticle}
                    onChange={(e) => handleChange(e, "secondArticle")}
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                />
            </div>

            {/* Points */}
            <h2 className="text-xl font-bold my-4">Points</h2>
            <div className="grid grid-cols-2 justify-center items-center gap-10">
                {formData.points.map((point, index) => (
                    <input
                        key={index}
                        type="text"
                        value={point}
                        onChange={(e) => handlePointsChange(e, index)}
                        placeholder={`point ${index + 1}`}
                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                    />
                ))}
            </div>
            <button
                className="bg-blue-500 text-white rounded-md px-3 py-2 mb-4"
                onClick={handleGeneratePoints}>
                Add Point
            </button>
        </div>

        {/* Services Section */}
        <h2 className="text-xl font-bold my-4">Services Section</h2>
        <div className="w-full flex flex-col justify-center items-center gap-10">
            {/* Cards*/}
            {formData.cards.map((card, index) => (
                <>
                    <div
                        key={`card-${index}`}
                        className="w-full flex justify-center items-center gap-10">
                        <input
                            type="text"
                            placeholder={`Card Image ${index + 1}`}
                            onChange={(e) =>
                                handleCardsChange(e, index, "image")
                            }
                            value={card.image}
                            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                        />
                        <input
                            type="text"
                            placeholder={`Card Title ${index + 1}`}
                            onChange={(e) =>
                                handleCardsChange(e, index, "title")
                            }
                            value={card.title}
                            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                        />
                    </div>
                    <div
                        key={`card-details-${index}`}
                        className="w-full flex justify-center items-center gap-10 border-b border-gray-400">
                        <input
                            type="text"
                            placeholder={`Card Lecture ${index + 1}`}
                            onChange={(e) =>
                                handleCardsChange(e, index, "lecture")
                            }
                            value={card.lecture}
                            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                        />
                        <input
                            type="text"
                            placeholder={`Card href ${index + 1}`}
                            onChange={(e) =>
                                handleCardsChange(e, index, "link")
                            }
                            value={card.link}
                            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                        />
                    </div>
                </>
            ))}
            <button
                className="bg-blue-500 text-white rounded-md px-3 py-2 mb-4"
                onClick={handleGenerateCards}>
                Add Card
            </button>
        </div>

        {/* Testimonial Section */}
        <h2 className="text-xl font-bold my-4">Testimonial Section</h2>
        <div className="w-full flex justify-center items-center gap-10">
            <input
                type="number"
                placeholder="First Counter"
                value={formData.firstCounter}
                onChange={(e) => handleChange(e, "firstCounter")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <input
                type="number"
                placeholder="Second Counter"
                value={formData.secondCounter}
                onChange={(e) => handleChange(e, "secondCounter")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
        </div>

        {/* Subscribe Section */}
        <h2 className="text-xl font-bold my-4">Subscribe Section</h2>
        <div className="w-full flex justify-center items-center gap-10">
            <input
                type="url"
                placeholder="Teacher Platform Link"
                value={formData.teacherPlatformLink}
                onChange={(e) => handleChange(e, "teacherPlatformLink")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
        </div>

        {/* Social Links */}
        <h2 className="text-xl font-bold my-4">Social Links</h2>
        <div className="w-full flex flex-col justify-center items-center gap-10">
            {formData.socialLinks.map((link, index) => (
                <div
                    key={index}
                    className="w-full flex justify-center items-center gap-10 border-b border-gray-400">
                    <input
                        type="text"
                        value={link.name}
                        placeholder={`Name ${index + 1}`}
                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                        onChange={(e) =>
                            handleSocialLinksChange(e, index, "name")
                        }
                    />
                    <input
                        type="text"
                        value={link.icon}
                        placeholder={`icon ${index + 1}`}
                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                        onChange={(e) =>
                            handleSocialLinksChange(e, index, "icon")
                        }
                    />
                    <input
                        type="url"
                        value={link.link}
                        placeholder={`Social Link ${index + 1}`}
                        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                        onChange={(e) =>
                            handleSocialLinksChange(e, index, "link")
                        }
                    />
                </div>
            ))}
            <button
                className="bg-blue-500 text-white rounded-md px-3 py-2 my-4"
                onClick={handleGenerateSocials}>
                Add Social Link
            </button>
        </div>

        {/* Contact Section */}
        <h2 className="text-xl font-bold my-4">Contact Section</h2>
        <div className="w-full flex justify-center items-center gap-10">
            <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => handleChange(e, "address")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleChange(e, "phone")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
        </div>

        {/* Site Settings */}
        <h2 className="text-3xl font-bold mt-10 mb-5 pb-2 border-b border-b-gray-300 ">
            Site Settings
        </h2>

        {/* Page Title */}
        <h2 className="text-xl font-bold my-4">Page Title</h2>
        <div className="w-full flex justify-center items-center gap-10">
            <input
                type="text"
                placeholder="Page Title"
                value={formData.title}
                onChange={(e) => handleChange(e, "title")}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
        </div>

        {/* Gender */}
        <h2 className="text-xl font-bold my-4">Gender</h2>
        <div className="w-full flex justify-center items-center gap-10">
            <label htmlFor="male">
                male
                <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    onChange={(e) => handleChange(e)}
                    placeholder="Gender"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4 mx-2"
                />
            </label>
            <label htmlFor="female">
                female
                <input
                    id="female"
                    name="gender"
                    type="radio"
                    value="female"
                    onChange={(e) => handleChange(e)}
                    placeholder="Gender"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4 mx-2"
                />
            </label>
        </div>

        {/*Language */}
        <h2 className="text-xl font-bold my-4">Language</h2>
        <div className="w-full flex justify-center items-center gap-10">
            <label htmlFor="arabic">
                arabic
                <input
                    id="arabic"
                    name="language"
                    type="radio"
                    value="arabic"
                    onChange={(e) => handleChange(e)}
                    placeholder="Gender"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4 mx-2"
                />
            </label>
            <label htmlFor="english">
                english
                <input
                    id="english"
                    name="language"
                    type="radio"
                    value="english"
                    onChange={(e) => handleChange(e)}
                    placeholder="Gender"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4 mx-2"
                />
            </label>
        </div>

        {/* Colors */}
        <h2 className="text-xl font-bold my-4">Colors</h2>
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <div className="w-full flex justify-center items-center gap-10">
                <label htmlFor="primary">Primary</label>
                <input
                    id="primary"
                    type="color"
                    value={formData.primaryColor}
                    onChange={(e) => handleChange(e, "primaryColor")}
                    placeholder="Primary"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                    style={{ backgroundColor: formData.primaryColor }}
                />
                <label htmlFor="secondary">Secondary</label>
                <input
                    id="secondary"
                    type="color"
                    value={formData.secondaryColor}
                    onChange={(e) => handleChange(e, "secondaryColor")}
                    placeholder="Secondary"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                    style={{ backgroundColor: formData.secondaryColor }}
                />
                <label htmlFor="hero">Hero</label>
                <input
                    id="hero"
                    type="color"
                    value={formData.heroColor}
                    onChange={(e) => handleChange(e, "heroColor")}
                    placeholder="Hero"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                    style={{ backgroundColor: formData.heroColor }}
                />
            </div>
            <div className="w-full flex justify-center items-center gap-10">
                <label htmlFor="page">Page</label>
                <input
                    id="page"
                    type="color"
                    value={formData.pageColor}
                    onChange={(e) => handleChange(e, "pageColor")}
                    placeholder="Page"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                    style={{ backgroundColor: formData.pageColor }}
                />
                <label htmlFor="subscribe">Subscribe</label>
                <input
                    id="subscribe"
                    type="color"
                    value={formData.subscribeColor}
                    onChange={(e) => handleChange(e, "subscribeColor")}
                    placeholder="Subscribe"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4"
                    style={{ backgroundColor: formData.subscribeColor }}
                />
            </div>
        </div>

        <button type="submit">Test</button>
    </form>