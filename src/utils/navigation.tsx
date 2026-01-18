export type PageName =
    | "Home"
    | "About"
    | "All Courses"
    | "Courses"
    | "Basic"
    | "Advanced Composition"
    | "Songwriting"
    | "Music Production"
    | "Contact";

interface PageConfig {
    path: string;
    title: string;
    description: string;
}

export const PAGE_REGISTRY: Record<PageName, PageConfig> = {
    "Home": {
        path: "/",
        title: "Music Mastery Academy",
        description: "Master the art of music."
    },
    "About": {
        path: "/about",
        title: "About Us",
        description: "Learn about our history, mission, and expert instructors."
    },
    "All Courses": {
        path: "/courses",
        title: "All Courses",
        description: "Browse our complete catalog of world-class music courses."
    },
    "Courses": {
        path: "/courses",
        title: "Courses",
        description: "Explore our wide range of music programs."
    },
    "Basic": {
        path: "/courses/basic",
        title: "Basic Fundamentals",
        description: "Start your musical journey with strong foundations."
    },
    "Advanced Composition": {
        path: "/courses/advanced-composition",
        title: "Advanced Composition",
        description: "Push the boundaries of your creativity with complex orchestration."
    },
    "Songwriting": {
        path: "/courses/songwriting",
        title: "Songwriting",
        description: "Learn the art of storytelling through lyrics and melody."
    },
    "Music Production": {
        path: "/courses/music-production",
        title: "Music Production",
        description: "Master the tools to produce professional-quality tracks."
    },
    "Contact": {
        path: "/contact",
        title: "Contact Us",
        description: "Get in touch with our team."
    }
};

export const getPagePath = (name: PageName): string => {
    return PAGE_REGISTRY[name]?.path || "/";
};

export const getPageConfig = (name: PageName): PageConfig => {
    return PAGE_REGISTRY[name] || PAGE_REGISTRY["Home"];
};
