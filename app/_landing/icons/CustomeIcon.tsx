import { ComponentPropsWithRef } from "react"

type SvgProps = ComponentPropsWithRef<"svg">

const Icons = {
    instagram: (props: SvgProps) => (
        <svg height="32" fill="#FFFF" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path d="m16 0c-4.349 0-4.891.021-6.593.093-1.709.084-2.865.349-3.885.745-1.052.412-1.948.959-2.833 1.849-.891.885-1.443 1.781-1.849 2.833-.396 1.02-.661 2.176-.745 3.885-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885.412 1.052.959 1.948 1.849 2.833.885.891 1.781 1.443 2.833 1.849 1.02.391 2.181.661 3.885.745 1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745 1.052-.412 1.948-.959 2.833-1.849.891-.885 1.443-1.776 1.849-2.833.391-1.02.661-2.181.745-3.885.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885-.412-1.052-.959-1.948-1.849-2.833-.885-.891-1.776-1.443-2.833-1.849-1.02-.396-2.181-.661-3.885-.745-1.703-.077-2.244-.093-6.593-.093zm0 2.88c4.271 0 4.781.021 6.469.093 1.557.073 2.405.333 2.968.553.751.291 1.276.635 1.844 1.197.557.557.901 1.088 1.192 1.839.22.563.48 1.411.553 2.968.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968-.303.751-.641 1.276-1.199 1.844-.563.557-1.099.901-1.844 1.192-.556.22-1.416.48-2.979.553-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563-.76-.303-1.281-.641-1.839-1.199-.563-.563-.921-1.099-1.197-1.844-.224-.556-.48-1.416-.563-2.979-.057-1.677-.084-2.197-.084-6.459 0-4.26.027-4.781.084-6.479.083-1.563.339-2.421.563-2.979.276-.761.635-1.281 1.197-1.844.557-.557 1.079-.917 1.839-1.199.563-.219 1.401-.479 2.964-.557 1.697-.061 2.197-.083 6.473-.083zm0 4.907c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zm0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333 5.333 2.385 5.333 5.333-2.385 5.333-5.333 5.333zm10.464-13.874c0 1.063-.865 1.921-1.923 1.921-1.063 0-1.921-.859-1.921-1.921 0-1.057.864-1.917 1.921-1.917s1.923.86 1.923 1.917z" /></svg>
    ),
    nextJs: (props: SvgProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props} >
            <path d="m17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0 -.087.049zm-7.173-22.156c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0 -2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1 -1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0 -2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1 -.206.213c-.075.038-.141.045-.495.045h-.406l-.108-.068a.442.442 0 0 1 -.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0 -2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" /></svg>
    ),
    work: (props: SvgProps) => (
        <svg fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg" {...props}>
            <g stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2">
                <path d="m2 9c0-1.10457.89543-2 2-2h16c1.1046 0 2 .89543 2 2v11c0 1.1046-.8954 2-2 2h-16c-1.10457 0-2-.8954-2-2z" /><path d="m16 7v-3c0-1.10457-.8954-2-2-2h-4c-1.10457 0-2 .89543-2 2v3" />
                <path d="m22 12h-20" /><path d="m7 12v2" /><path d="m17 12v2" /></g></svg>

    ),

    twitter: (props: SvgProps) => (
        <svg viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="m459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                fill="#fff"
            />
        </svg>
    ),

    video: (props: SvgProps) => (
        <svg viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="m0 0h24v24h-24z"
                fill="#fff"
                opacity="0"
            />
            <path
                d="m21 7.15a1.7 1.7 0 0 0 -1.85.3l-2.15 2v-1.45a3 3 0 0 0 -3-3h-9a3 3 0 0 0 -3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48v-6.74a1.6 1.6 0 0 0 -1.01-1.48zm-6 8.85a1 1 0 0 1 -1 1h-9a1 1 0 0 1 -1-1v-8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm5-1.4-2.81-2.6 2.81-2.6z"
                fill="#fff" />
        </svg>
    ),
    youtube: (props: SvgProps) => (
        <svg
            width="24"
            height="24"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>

            <path
                d="M14 
            12L10.5
             14V10L14 12Z"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round" />
            <path
                d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    )
}

type IconName = keyof typeof Icons

export type CustomeIconProps = {
    name: IconName
    size?: number
} & SvgProps;

export const CustomeIcon = ({ name, size, ...props }: CustomeIconProps) => {
    const Icon = Icons[name];
    return <Icon height={size} width={size} {...props} />
}