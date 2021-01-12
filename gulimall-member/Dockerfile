FROM java:8
EXPOSE 8000

VOLUME /tmp
ADD gulimall-member-0.0.1-SNAPSHOT.jar  /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]