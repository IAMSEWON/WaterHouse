import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!modalRef.current) return;

        // GSAP 애니메이션 처리
        if (isOpen) {
            // Fade In 애니메이션
            gsap.fromTo(
                modalRef.current,
                {
                    opacity: 0, // 시작 opacity 0 (투명)
                },
                {
                    opacity: 1, // 끝 opacity 1 (불투명)
                    duration: 0.5, // 애니메이션 시간
                    ease: "power3.out", // 부드러운 애니메이션
                }
            );
            document.body.style.overflow = "hidden";
        } else {
            // Fade Out 애니메이션
            gsap.to(modalRef.current, {
                opacity: 0, // 끝 opacity 0 (투명)
                duration: 0.5, // 애니메이션 시간
                ease: "power3.in", // 부드러운 애니메이션
            });
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        // 배경을 클릭하면 모달을 닫도록
        if (e.target === modalRef.current) {
            onClose();
        }
    };

    return (
        <div
            ref={modalRef}
            onClick={handleBackdropClick} // 배경 클릭 시 onClose 호출
            className={`fixed z-40 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 transition-all ${isOpen ? "visible" : "invisible"}`}
            style={{ display: isOpen ? "flex" : "none" }}
        >
            <div className="w-full">
                <button
                    className="absolute right-[3%] top-[3%]"
                    onClick={onClose}
                >
                    <X width={45} height={45} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;