import Modal from './Modal'

interface BaseModalWrapperProps {
    isModalVisibile: boolean;
    onBackdropClick: () => void;

}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisibile}) => {
    if(!isModalVisibile) {
        return null;
    }
    return (<Modal onBackdropClick={onBackdropClick}/>)
    
}

export default BaseModalWrapper