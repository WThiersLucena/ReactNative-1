import React from "react";
import { TouchableOpacity,
        StyleSheet,
        Text,
      TouchableOpacityProps } from "react-native";


interface SkillCardProps extends TouchableOpacityProps{
  skill : String;
}


export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
      >
        <Text style={styles.textSkill}>
          {skill}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 20,
    marginTop: 8,
    borderRadius: 5,
    alignItems: "center",
  },

  textSkill: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
