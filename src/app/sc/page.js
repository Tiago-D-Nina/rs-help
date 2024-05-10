import React from 'react'; 
import Header from '@/components/Header'; 
import styles from '@/css/main.module.css'; 
import DonationCard from '@/components/DonationCard';


const Page = () => {
  // Array de objetos com detalhes das doações
  const donationDetails = 
  [
    {
      title: "Doador Responsável", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      donations: ["Doação 1", "Doação 2", "Doação 3", "Doação 4"],
      contact: { 
        pix: "54845", 
        phone: "XX XXXXX-XXXX", 
      },
      address: "Rua, 342 Estado"
    },
    
  ];
    

  return (
    <div>
      <Header 
        title="Santa Catarina"
      /> 
      <main className={styles.main}> 
      <div className={styles.container}> 

      {/* Loop para imprimir os cards */}
      {donationDetails.map((item, index) => (
        <DonationCard
        title={donationDetails[index].title}
        description={donationDetails[index].description}
        donations={donationDetails[index].donations} 
        contact={{ pix: donationDetails[index].contact.pix, phone: donationDetails[index].contact.phone}}
        address={donationDetails[index].address}
      />
      ))}
        

        
      </div>
    </main>
    </div>
  );
};

export default Page; 
