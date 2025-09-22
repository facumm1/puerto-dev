import { X } from "lucide-react"

interface ModalProps {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

export const Modal = ({ open, children, onClose}: ModalProps) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 pt-18 flex items-center justify-center bg-black/50">
      <div className="relative w-[90vw] max-w-5xl max-h-[90vh] bg-background rounded-lg overflow-hidden shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="w-full h-full flex items-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
