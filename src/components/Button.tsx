import React from "react";

import { TouchableOpacity,
         Text,
         StyleSheet,
         TouchableOpacityProps} from "react-native";

interface ButtonProps extends TouchableOpacityProps{
  title: String
}



export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
      /* TouchableOpacity = RESPOSAVEL PELA AÇOA DE OPACIDADE NO BUTTON */

      style={styles.button}
      activeOpacity={0.2}
      {...rest}
      

      /*activeOpacity = CONTROLE DE INTENSIDADE DA OPACIDADE VAI DE 0 A 1  */
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}





const styles = StyleSheet.create({  
  button: {
    backgroundColor: "#a370f7",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

