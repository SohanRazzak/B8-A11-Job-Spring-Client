
import PropTypes from 'prop-types';

const ContainerLayout = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto'>
            {children}
        </div>
    );
};

ContainerLayout.propTypes = {
    children: PropTypes.node
};

export default ContainerLayout;