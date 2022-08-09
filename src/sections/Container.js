/**
 * Global container
 * @param {any} children - Any JSX component
 * @param {boolean} narrow - Set true to have a narrow container
 * @returns 
 */
 const Container = ({ children, narrow }) => {
    return (
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        { narrow
          ? <div className="max-w-4xl mx-auto">{ children }</div> 
          : children 
      }
      </div>
    );
  };
  
  export default Container;
  