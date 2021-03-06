import React, { Component } from "react";
import { TextInput, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../reducer";

class AddTodo extends Component {
  state = {
    text: ""
  };

  onSubmitEditing = () => {
    const { text } = this.state;
    const { dispatch } = this.props;
    if (!text) return;
    dispatch(
      addTodo(text, () => {
        this.setState({ text: "" });
      })
    );
  };

  render() {
    const { text } = this.state;

    return (
      <TextInput
        style={styles.add}
        value={text}
        placeholder={"What to get done?"}
        onChangeText={text => this.setState({ text })}
        maxLength={25}
        returnKeyType="go"
        onSubmitEditing={this.onSubmitEditing}
        {...(Platform.OS === "ios" ? { clearButtonMode: "while-editing" } : {})}
      />
    );
  }
}

const styles = StyleSheet.create({
  add: {
    padding: 15,
    height: 50
  }
});

AddTodo = connect()(AddTodo);

export default AddTodo;
