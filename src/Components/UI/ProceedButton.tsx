import { MouseEventHandler } from "react";
import { FaChevronRight } from "react-icons/fa";

type ProceedButtonProps = {
    label: string;
    className: string;
    onClick: MouseEventHandler
}
export default function ProceedButton ({ label, className, onClick }: ProceedButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            <p>{label}</p>
            <FaChevronRight />
        </button>
    )
}