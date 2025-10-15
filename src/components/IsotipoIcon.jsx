import React from 'react';

const IsotipoIcon = ({ className }) => {
  return (
    <img
      src="/images/Isotipo_Principal.png" // Apunta a la imagen en tu carpeta /public
      alt="Isotipo JPCodai"
      className={className} // Permite que el componente padre controle el estilo
    />
  );
};

export default IsotipoIcon;