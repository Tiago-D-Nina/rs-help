import React from 'react'; 
import Header from '@/components/Header'; 
import styles from '@/css/main.module.css'; 
import DonationCard from '@/components/DonationCard';


const Page = () => {
  // Array de objetos com detalhes das doações
  const donationDetails = 
  [
    {
      title: "Abrigo BDG ARENA", 
      description: "Abrigo para mulheres e crianças.", 
      donations: ["Colher Plastica", "Toalhas de banho", "Papinha de nenén", "Banheira de nenén"],
      contact: { 
        pix: "", 
        phone: "", 
      },
      address: "Rua Bento Martins 457, Piratini - Alvorada"
    },
    {
      title: "CTG Chilena de Prata", 
      description: "", 
      donations: ["Cobertores", "Meias", "Roupas Íntimas"],
      contact: { 
        pix: "02760914003 - Nubank - Kamila Chaves Vignol", 
        phone: "", 
      },
      address: "José do Patrocínio, 235 - Jardim Porto Alegre"
    },
    
  ];

  return (
    <div>
      <Header 
        title="Rio Grande do Sul"
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
