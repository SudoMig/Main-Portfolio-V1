/**
 * Global container
 * @param {any} children - Any JSX component
 * @param {boolean} narrow - Set true to have a narrow container
 * @returns
 */
export const Container = ({ children, narrow, resolution }) => {
  return (
    <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
      {narrow || resolution ? (
        <div
          className={
            narrow
              ? 'max-w-4xl mx-auto'
              : resolution
              ? 'md:max-w-8xl mx-auto max-w-5xl mx-auto'
              : null
          }
        >
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Container;
