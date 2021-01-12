FROM java:8
EXPOSE 12000

VOLUME /tmp
ADD gulimall-search-0.0.1-SNAPSHOT.jar  /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]