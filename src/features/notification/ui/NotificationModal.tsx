'use client'

import Button from '@/shared/ui/Button'
import Modal from '@/shared/providers/ModalContext'
import BellIcon from '@/assets/BellIcon.svg'
import { useRouter } from 'next/navigation'

interface NotificationModalProps {
  triggerText: string
}

export default function NotificationModal({
  triggerText,
}: NotificationModalProps) {
  const router = useRouter()

  return (
    <Modal variant="bottomSheet">
      <Modal.Trigger>
        <Button>{triggerText}</Button>
      </Modal.Trigger>
      <Modal.Content>
        <div className="mb-4.5 rounded-full bg-[#2B75CB1A] p-2">
          <BellIcon className="w-8 text-blue-primary" />
        </div>
        <h2 className="typography-H3 mb-2">알림을 받을까요?</h2>
        <p className="typography-B1_medium mb-8 text-[#6E6E6E]">
          알림 받기를 수락하셔야 등록된 키워드가
          <br />
          포함된 공지의 알림을 받을 수 있어요
        </p>
        <div className="w-full space-y-3">
          <Button>알림 받기</Button>
          <Button
            onClick={() => router.push('/signup/complete')}
            variant="outline"
          >
            나중에 하기
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  )
}
