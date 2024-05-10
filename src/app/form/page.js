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

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScxeHJ4iK1nprVIpjjIBFNzjdORdxriFiX5VsLxm6YbP9j0nA/viewform?embedded=true" width="" height="650" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
        

        
      </div>
    </main>
    </div>
  );
};

export default Page; 
