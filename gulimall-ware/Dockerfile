FROM java:8
EXPOSE 11000

VOLUME /tmp
ADD gulimall-ware-2.2.6.RELEASE.jar  /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]