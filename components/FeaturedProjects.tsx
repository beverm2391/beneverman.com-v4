import ExternalLink from "@/components/ExternalLink"
import { Icons } from "@/components/icons"

interface ProjectProps {
    project: {
        title: string;
        description: string;
        href: string;
    };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
                {project.description}
            </p>
            <ExternalLink
                href={project.href}
                className="flex items-center mt-2 text-sm font-medium text-slate-600 hover:text-slate-400 dark:text-slate-300 dark:hover:text-slate-600 sm:text-base"
            >
                <span>View Project</span>
                <Icons.arrowRight className="w-4 h-4 ml-1" />
            </ExternalLink>
        </div>
    )
}

interface FeaturedProjectsProps {
    projects: {
        title: string;
        description: string;
        href: string;
    }[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
    return (
        <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    )
}