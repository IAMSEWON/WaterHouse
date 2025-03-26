

type EmailButtonProps = {
    className?: string;
}

function EmailButton({ className }: EmailButtonProps) {
    return (
        <button className={`border-[0.75px] border-white rounded-full w-[217px] px-[14px] py-[7px] ${className}`}>
            <div className="text-[13px] font-normal text-white">INFO@THEWATERHOUSE.KR</div>
        </button>
    )
}

export default EmailButton;