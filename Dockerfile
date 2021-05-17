FROM gbofullcycle/mysql-desafio-fc

ENV MYSQL_ROOT_PASSWORD=root
ENV MTSQL_USER=root

CMD [ "--innodb-use-native-aio=0" ]