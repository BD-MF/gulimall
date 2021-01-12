FROM java:8
EXPOSE 30000

VOLUME /tmp
ADD gulimall-third-party-0.0.1-SNAPSHOT.jar  /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]