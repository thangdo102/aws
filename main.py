import boto3

client = boto3.client('ec2', region_name='ap-southeast-1')

response = client.run_instances(
    BlockDeviceMappings=[
        {
            'DeviceName': '/dev/xvda',
            'Ebs': {

                'DeleteOnTermination': True,
                'VolumeSize': 8,
                'VolumeType': 'gp2'
            },
        },
    ],
    ImageId='ami-0a481e6d13af82399',
    InstanceType='t2.micro',
    MaxCount=1,
    MinCount=1,
    Monitoring={
        'Enabled': False
    },
    SecurityGroupIds=[
        'sg-0a92860eb3e3e59b4',
    ],
)

print(response)


stopResponse = client.stop_instances(
    InstanceIds=[
        'i-0c8646149b867875f',
    ]
)