FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root
ENV MTSQL_USER=root

CMD [ "--innodb-use-native-aio=0" ]