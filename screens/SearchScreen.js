import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import SearhContext from '../contexts/SearchContext';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import EmptySearchResult from '../components/EmptySearchResult';

function SearchScreen({navigation}) {
  const {keyword} = useContext(SearhContext);
  const {logs} = useContext(LogContext);
  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  if (keyword === '') {
    return <EmptySearchResult type={'EMPTY_KEYWORD'} />;
  }
  if (filtered.length === 0) {
    return <EmptySearchResult type={'NOT_FOUND'} />;
  }
  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default SearchScreen;
