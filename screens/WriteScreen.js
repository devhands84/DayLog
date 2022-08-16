import React, {useContext, useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../contexts/LogContext';
import {useNavigation} from '@react-navigation/native';
function WriteScreen({route}) {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation = useNavigation();
  const {onCreate, onModify, onRemove} = useContext(LogContext);
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());

  const onAskRemove = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this log?', [
      {text: 'cancel', style: 'cancel'},
      {
        text: 'delete',
        onPress: () => {
          onRemove(log?.id);
          navigation.pop();
        },
        style: 'destructive',
      },
    ]);
  };

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        title,
        body,
      });
    } else {
      onCreate({
        title,
        body,
        date: date.toISOString(),
      });
    }

    navigation.pop();
  };
  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!log}
          date={date}
          onChangeDate={setDate}
        />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
