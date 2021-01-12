FROM java:8
EXPOSE 7000

VOLUME /tmp
ADD gulimall-ware-0.0.1-SNAPSHOT.jar  /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]