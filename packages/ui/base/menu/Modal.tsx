import { useEffect, useState } from 'react';
import { Button } from "../shadcn/button"
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogDescription } from "../shadcn/dialog"

interface ModalPrpos {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Modal({ title, description, isOpen, onClose, children }: ModalPrpos) {
    return (
        <div>
            <Dialog>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>

                </DialogContent>
            </Dialog>
            {children}
        </div>
    )
}

type AlertModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
};

export const AlertModal = ({
    isOpen,
    onClose,
    onConfirm,
    loading,
}: AlertModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Modal
            title="Are you sure ?"
            description="This action cannot be undone!..."
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} variant="outline" onClick={onClose}>
                    Cancel
                </Button>
                <Button disabled={loading} variant="destructive" onClick={onConfirm}>
                    Confirm
                </Button>
            </div>
        </Modal>
    );
};

