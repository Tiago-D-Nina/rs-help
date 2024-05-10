import React from 'react'; 
import styles from './donationCard.module.css'

const DonationCard = ({ title = '', description = '', donations = [], contact = {}, address = '' }) => { 
    return (
      <div className={styles.card_div}> 
        <h2 className={styles.card_tittle}>{title}</h2> {/* Título do cartão */}
        {description && (
          <p>{description}</p>
        )}
  
        {donations.length > 0 && ( /* Se houver doações necessárias, mostra uma lista */
          <div>
            <h2>Doações necessárias</h2>
            <ul className={styles.row_items}> 
              {donations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}


        {address && (
          <h2>{address}</h2>
        )}
        <div className={styles.contact}> {/* Informações de contato */}
          {contact.pix &&(
            <h3>PIX: {contact.pix || 'N/A'}</h3> 
          
          )}
          {contact.phone && (
            <h3>Contato: {contact.phone || 'N/A'}</h3> 
          )}
          
        </div>
      </div>
    );
  };
  

export default DonationCard;
