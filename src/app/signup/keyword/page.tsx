'use client'

import KeywordList from '@/features/keyword/ui/keywordList'
import InputForm from '@/features/keyword/ui/InputForm'
import Button from '@/shared/ui/Button'
import Modal from '@/shared/providers/ModalContext'
import BellIcon from '@/assets/BellIcon.svg'

export default function Page() {
  return (
    <>
      <div className="flex-1">
        <h2 className="typography-H3 mt-4.5 mb-8">
          보고 싶은 공지의 <br /> 키워드를 입력해 주세요
        </h2>
        <InputForm />
        <KeywordList />
      </div>
      <Modal variant="bottomSheet">
        <Modal.Trigger>
          <Button>다음</Button>
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
            <Button variant="outline">나중에 하기</Button>
          </div>
        </Modal.Content>
      </Modal>
    </>
  )
}
