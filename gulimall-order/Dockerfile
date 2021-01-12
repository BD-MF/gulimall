FROM java:8
EXPOSE 9000

VOLUME /tmp
ADD gulimall-order-0.0.1-SNAPSHOT.jar  /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]