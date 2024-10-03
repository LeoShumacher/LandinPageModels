import { Button } from "@/components/ui/button"

interface MainTitleProps {
    title: string
    subtitle: string
    buttonText: string
}

export default function IntroductionTexts({title,subtitle, buttonText}: MainTitleProps) {
    return (
        <div className="text-center flex flex-col gap-2 items-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <h2 className="text-md font-semibold">{subtitle}</h2>
            <Button className="w-32">{buttonText}</Button>
        </div>
    )
}