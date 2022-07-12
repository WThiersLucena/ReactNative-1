import React from "react";

import { View, Text, StyleSheet,
         TextInput, ScrollView, 
         FlatList 
} from "react-native";

import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { SkillCard } from "../../components/SkillCard";


// Criando uma interfaçe sempre criadas fora das funçoes
interface SkillData {
  id: String;
  name: String;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState ("");


  // handle e uma  interação do usuario
  function handleAddNewSkill() {
    const data ={
      id: String(new Date().getTime()),
      name: newSkill

    }
    setMySkills((oldState) => [...oldState, data]);
  }

  function handleRemoveSkill(id: String){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }


  useEffect( ()=> {
    const currentHour = new Date().getHours();

    if(currentHour < 12 ){
      setGreetings("Good morning");
    } else if (currentHour >= 12 && currentHour < 18){
      setGreetings("Good after");
    } else{
      setGreetings("Good night");
    }

  }, [])


  return (
    <View style={styles.container}>

      <Text style={styles.title}> Welcome </Text>

      <Text style={styles.title}>  Wanderson Thiers, { greetings }</Text>

      <TextInput
        style={styles.input}
        placeholder=" New Skill : "
        placeholderTextColor="#daa520"
        onChangeText={setNewSkill}

        
        
      />

      <Button onPress={handleAddNewSkill}
        title="Add"
      />
      

      

      <Text
        style={[styles.title, { color: "#daa520", marginTop: 20 }]}

        /* NESTE CASO REUTILIZAMOS UM STYLE E ADICIONAMOS MAIS PERSONALIZAÇÕES SOMENTE
                NO COMPOMENTE DESEJADO */
      >
        My Skills
      </Text>

      


          {/* FlatList CARREGA APENAS OS ITENS QUE CABEM NA TELA E VAI CARREGANDO CONFORME VOCE DESCE A PAGINA "SCROW" */}
      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={ item.name } 
            onPress={ () => handleRemoveSkill(item.id)}
          />
          
        )}
      />
          {/* ScrollView IRA CARREGAR TODA A SUA LISTA INTEIRA = MENOR DESEMPENHO NAO RECOMENDAVEL PARA LISTAS GRANDES  */}
      {/* <ScrollView>
        {
          mySkills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
         ))
       }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#FFF",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },

  greetings:{
    color: '#fff',
  }
});
